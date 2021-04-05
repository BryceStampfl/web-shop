package bs.webshop.api;

import bs.webshop.entity.Product;
import bs.webshop.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductResource {

    @Autowired
    private ProductRepository productRepository;


    public ProductResource(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/")
    public List<Product> findAll() {
        return productRepository.findAll();
    }


    @PostMapping("/")
    Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("{id}")
    Product findById(@PathVariable Long id) throws Exception {
        return productRepository.findById(id)
                .orElseThrow(() -> new Exception("Product not found"));
    }

    @PutMapping("{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return productRepository.findById(id)
                .map(product -> {
                    product.setName(newProduct.getName());
                    product.setPrice(newProduct.getPrice());
                    product.setDescription(newProduct.getDescription());
                    return productRepository.save(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return productRepository.save(newProduct);
                });
    }

    @DeleteMapping("{id}")
    void deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
    }

}
