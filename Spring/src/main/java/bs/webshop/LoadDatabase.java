package bs.webshop;

import bs.webshop.entity.Product;
import bs.webshop.entity.User;
import bs.webshop.repositories.ProductRepository;
import bs.webshop.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class LoadDatabase {


    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);


    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Bean
    CommandLineRunner initDatabase(ProductRepository productRepository, UserRepository userRepository) {

        return args -> {
            log.info("Preloading " + productRepository.save(new Product("Product 1",  1,  "Description 1")));
            log.info("Preloading " + productRepository.save(new Product("Product 2",  2,  "Description 2")));
            log.info("Preloading " + productRepository.save(new Product("Product 3",  3,  "Description 3")));
            log.info("Preloading " + productRepository.save(new Product("Product 4",  4,  "Description 4")));
            log.info("Preloading " + productRepository.save(new Product("Product 4",  4,  "Description 4")));
            log.info("Preloading" + userRepository.save(new User("username", bCryptPasswordEncoder.encode("password"))));


        };
    }
}

