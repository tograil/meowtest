namespace MeowFacts.Services;

public interface IAuth
{
    Task<bool> LoginCorrect(string username, string password);
}