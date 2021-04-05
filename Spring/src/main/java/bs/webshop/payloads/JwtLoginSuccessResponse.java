package bs.webshop.payloads;

public class JwtLoginSuccessResponse {
    private boolean successful;
    private String token;

    public JwtLoginSuccessResponse(boolean successful, String token) {
        this.successful = successful;
        this.token = token;
    }

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        this.successful = successful;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String toString() {
        return "JwtLoginSuccessResponse{\n" + "successful = " + successful
                + "\ntoken = " + token + "\n}";
    }
}
