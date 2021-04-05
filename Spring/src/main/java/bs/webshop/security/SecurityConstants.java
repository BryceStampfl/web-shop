package bs.webshop.security;

public class SecurityConstants {
    public static final String REGISTER_URL = "/api/users/register";
    public static final String LOGIN_URL = "/api/users/login";

    public static final String H2_URLS = "/h2-console/**";

    public static final String SECRET ="SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX= "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 864_000_000; //10 days
}
