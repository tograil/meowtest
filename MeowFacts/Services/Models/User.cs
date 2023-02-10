using Microsoft.AspNetCore.Identity;

namespace MeowFacts.Services.Models;

public class User : IdentityUser
{
    public string Name { get; set; }
}