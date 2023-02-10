using MeowFacts.Services.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MeowFacts.Context;

public sealed class AuthContext : IdentityDbContext<User>
{
    public AuthContext(DbContextOptions<AuthContext> options)
        : base(options)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        var user = new User()
        {
            Id = "b74ddd14-6340-4840-95c2-db12554843e5",
            UserName = "Admin",
            Name = "John Dow",
            Email = "admin@gmail.com",
            LockoutEnabled = false,
            PhoneNumber = "1234567890"
        };

        var passwordHasher = new PasswordHasher<User>();
        user.PasswordHash = passwordHasher.HashPassword(user, "Admin*123");

        var user2 = new User()
        {
            Id = "87449a80-9442-40c5-9a6c-fbfeccf9d484",
            UserName = "User",
            Name = "John Lennon",
            Email = "user@gmail.com",
            LockoutEnabled = false,
            PhoneNumber = "1234567890"
        };

        user2.PasswordHash = passwordHasher.HashPassword(user2, "User*123");

        builder.Entity<User>().HasData(
            user,
            user2);
    }
}