package bs.webshop.repositories;

import bs.webshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    //For authentication
    User findByUsername(String username);
}
