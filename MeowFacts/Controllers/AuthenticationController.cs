using MeowFacts.Models;
using MeowFacts.Services;
using MeowFacts.Services.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace MeowFacts.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly IAuth _auth;
    public AuthenticationController(IAuth auth)
    {
        _auth = auth;
    }

    [HttpPost]
    [Route("login")]
    public async Task<LoginSuccessDto> Login([FromBody] LoginDto loginDto)
    {
        return new LoginSuccessDto
        {
            Success = await _auth.LoginCorrect(loginDto.Email, loginDto.Password)
        };
    }
}