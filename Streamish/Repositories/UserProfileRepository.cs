using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Streamish.Models;
using Streamish.Utils;

namespace Streamish.Repositories
{

    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * FROM UserProfile";

                    var reader = cmd.ExecuteReader();

                    var userProfiles = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userProfiles.Add(GetUserProfileFromReader(reader));
                    }

                    reader.Close();

                    return userProfiles;
                }
            }
        }

        public UserProfile GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT * FROM UserProfile WHERE Id = @id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    UserProfile userProfile = null;

                    if (reader.Read())
                    { 
                        userProfile = GetUserProfileFromReader(reader);
                    }

                    reader.Close();

                    return userProfile;
                }
            }
        }
        public void Add(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (Name, Email, ImageUrl, DateCreated)
                        VALUES (@name, @email, @imageUrl, SYSDATETIME() )";

                    DbUtils.AddParameter(cmd, "@name", userProfile.Name);
                    DbUtils.AddParameter(cmd, "@email", userProfile.Email);
                    DbUtils.AddParameter(cmd, "@imageUrl", userProfile.ImageUrl);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Update(UserProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    //        cmd.CommandText = @"
                    //            UPDATE UserProfile
                    //               SET Title = @Title,
                    //                   Description = @Description,
                    //                   DateCreated = @DateCreated,
                    //                   Url = @Url,
                    //                   UserProfileId = @UserProfileId
                    //             WHERE Id = @Id";

                    //        DbUtils.AddParameter(cmd, "@Title", userProfile.Title);
                    //        DbUtils.AddParameter(cmd, "@Description", userProfile.Description);
                    //        DbUtils.AddParameter(cmd, "@DateCreated", userProfile.DateCreated);
                    //        DbUtils.AddParameter(cmd, "@Url", userProfile.Url);
                    //        DbUtils.AddParameter(cmd, "@UserProfileId", userProfile.UserProfileId);
                    //        DbUtils.AddParameter(cmd, "@Id", userProfile.Id);

                    //        cmd.ExecuteNonQuery();
                }
            }
            }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM UserProfile WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
        
        private UserProfile GetUserProfileFromReader(SqlDataReader reader)
        {
            return new UserProfile()
            {
                Name = DbUtils.GetString(reader, "Name"),
                Email = DbUtils.GetString(reader, "Email"),
                ImageUrl = DbUtils.GetString(reader, "ImageUrl"),
                DateCreated = DbUtils.GetDateTime(reader, "DateCreated")
            };
        }
    }
}