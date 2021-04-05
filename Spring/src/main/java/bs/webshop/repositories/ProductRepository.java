package bs.webshop.repositories;

import bs.webshop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    //For authentication
    //Product findByUsername(String username);
}
