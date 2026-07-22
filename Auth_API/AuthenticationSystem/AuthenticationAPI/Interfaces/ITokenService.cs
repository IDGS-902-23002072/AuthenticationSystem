using AuthenticationAPI.Models;

namespace AuthenticationAPI.Interfaces
{
    public interface ITokenService
    {
        Task<String> CreateTokenAsync(ApplicationUser user);

        string GenerateRefreshToken();
    }
}
