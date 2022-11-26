using Microsoft.AspNetCore.Mvc;
using Api.Data;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Api.Models;
using Microsoft.IdentityModel.Tokens;
using Api.Models.UserViewModels;
using Microsoft.AspNetCore.Authorization;

namespace Api.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class UserController : Controller
{
    private static readonly string[] Summaries = new[]
    {
        "This is test number 1", "This is test number 2", "This is test number 3"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    private readonly MariaDbContext _mariaDbContext;

    public UserController(ILogger<WeatherForecastController> logger, MariaDbContext mariaDbContext)
    {
        _logger = logger;
        _mariaDbContext = mariaDbContext;
    }

    [HttpPost]
    public IActionResult Login(LoginModel model) {
        string username = model.Username;
        string password = model.Password;
        var user = _mariaDbContext.Users.FirstOrDefault(x => x.Name == username && x.Password == password);
        if (user == null) {
            return Forbid();
        }

        var identity = GetIdentity(username, password);

        var now = DateTime.UtcNow;
        // создаем JWT-токен
        var jwt = new JwtSecurityToken(
                issuer: AuthOptions.ISSUER,
                audience: AuthOptions.AUDIENCE,
                notBefore: now,
                claims: identity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256)
        );
        var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

        var response = new {
            token = encodedJwt,
            username = identity.Name
        };

        return Json(response);
    }

    [Authorize]
    [HttpGet]
    public IActionResult Profile() {
        var user = new { username = User.Identity.Name };
        return Json(user);
    }

    private ClaimsIdentity GetIdentity(string username, string password) {
        var claims = new List<Claim> {
            new Claim(ClaimsIdentity.DefaultNameClaimType, username),
            // new Claim(ClaimsIdentity.DefaultRoleClaimType, person.Role)
        };

        ClaimsIdentity claimsIdentity = new ClaimsIdentity(
            claims, "Token", ClaimsIdentity.DefaultNameClaimType,
            ClaimsIdentity.DefaultRoleClaimType
        );

        return claimsIdentity;
    }
}


