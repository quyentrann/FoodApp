package vn.edu.iuh.fit.coffeehouse.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.edu.iuh.fit.coffeehouse.models.Product;
import vn.edu.iuh.fit.coffeehouse.services.ProductService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/api/images/{imageName}")
    public ResponseEntity<?> getImage(@PathVariable String imageName) {
        try {
            ClassPathResource imgFile = new ClassPathResource("static/images/" + imageName);
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(imgFile);
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Image not found");
        }
    }

    @GetMapping
    public List<Product> getAll(){
        return productService.getAll();
    }

    @PostMapping
    public Product update(Product product){
        return productService.create(product);
    }

    @PutMapping("{id}")
    public Product update(@PathVariable long id, @RequestBody Product product){
        return productService.update(id,product);
    }

    @DeleteMapping("{id}")
    public Boolean delete(@PathVariable long id){
        return productService.delete(id);
    }
}
