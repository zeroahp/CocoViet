package com.cocoviet.backend.controller;


import com.cocoviet.backend.models.reponse.ResponseData;
import com.cocoviet.backend.models.request.ProductRequest;
import com.cocoviet.backend.service.ICoconutProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class CoconutProductController {

    @Autowired
    ICoconutProductService coconutProductService;

    @PostMapping("/add")
    ResponseEntity<ResponseData> addProduct(@RequestBody @Valid ProductRequest coconutProductRequest){

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ResponseData.builder()
                        .data(coconutProductService.addProduct(coconutProductRequest))
                        .msg("Add product: "+ coconutProductRequest.getProductName() + " successfully")
                        .status("OK")
                        .build());
    }

    @PatchMapping("/{productId}")
    ResponseEntity<ResponseData> update(@PathVariable("productId") String productId, @RequestBody @Valid ProductRequest coconutProductRequest){
        return ResponseEntity.status(HttpStatus.OK)
                .body(ResponseData.builder()
                        .data(coconutProductService.updateProduct(productId,coconutProductRequest))
                        .msg("Update product Id: "+ productId +" - Name:" + coconutProductRequest.getProductName() + " successfully!")
                        .status("OK")
                        .build());

    }

    @GetMapping("/{productId}")
    ResponseEntity<ResponseData> getProduct(@PathVariable("productId") String productId){
        return ResponseEntity.status(HttpStatus.OK)
                .body(ResponseData.builder()
                        .data(coconutProductService.getProduct(productId))
                        .msg("Update product Id: "+ productId +" successfully!")
                        .status("OK")
                        .build());
    }

    @GetMapping("/get-all-products")
    ResponseEntity<ResponseData> getProduct(){
        return ResponseEntity.status(HttpStatus.OK)
                .body(ResponseData.builder()
                        .data(coconutProductService.getAllProduct())
                        .msg("Get all product successfully!")
                        .status("OK")
                        .build());
    }
}
