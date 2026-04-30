from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str
    secret_key: str
    allowed_origins: str = "http://localhost"
    access_token_expire_minutes: int = 480  # 8 hours

    @property
    def origins(self) -> list[str]:
        return [o.strip() for o in self.allowed_origins.split(",")]

    class Config:
        env_file = ".env"


settings = Settings()
