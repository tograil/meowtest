using MeowFacts.Services.Models;
using Microsoft.AspNetCore.Identity;

namespace MeowFacts.Services;

public class AuthService : IAuth
{   private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    public AuthService(UserManager<User> userManager, SignInManager<User> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    public async Task<bool> LoginCorrect(string username, string password)
    {
        var user = _userManager.Users.FirstOrDefault(user => user.Email == username);

        if (user == null)
        {
            return false;
        }

        var signInResult = await _signInManager.CheckPasswordSignInAsync(user, password, false);

        return signInResult.Succeeded;
    }
}