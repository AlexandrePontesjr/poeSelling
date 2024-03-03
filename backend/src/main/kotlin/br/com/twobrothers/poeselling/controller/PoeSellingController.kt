package br.com.twobrothers.poeselling.controller

import br.com.twobrothers.poeselling.controller.request.ProductRequest
import br.com.twobrothers.poeselling.controller.response.ProductResponse
import br.com.twobrothers.poeselling.mapper.toDomain
import br.com.twobrothers.poeselling.mapper.toResponse
import br.com.twobrothers.poeselling.service.ProductService
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController(value = "Products")
@RequestMapping(name = "Product", value = ["products"])
class PoeSellingController(
    val productService: ProductService
) {

    @GetMapping
    fun listAll(pageable: Pageable): ResponseEntity<Page<ProductResponse>>{
        return ResponseEntity.ok(productService.gelAll(pageable).map { it.toResponse() })
    }

    @PostMapping
    fun create(@RequestBody productRequest: ProductRequest): ResponseEntity<ProductResponse>{
        return ResponseEntity(
            productService.save(
                productRequest.toDomain("yan")
            ).toResponse(), HttpStatus.CREATED
        )
    }

    @PutMapping(value = ["/{id}"])
    fun edit(@PathVariable id: Int, @RequestBody productRequest: ProductRequest): ResponseEntity<ProductResponse>{
        return ResponseEntity(
            productService.save(
                productRequest.toDomain("yan", id)
            ).toResponse(), HttpStatus.OK
        )
    }

    @DeleteMapping(value = ["/{id}"])
    fun delete(@PathVariable id: Int): ResponseEntity<Any>{
        productService.delete(id, "yan")
        return ResponseEntity(HttpStatus.OK)
    }

    @GetMapping(value = ["/{id}"])
    fun getDetails(@PathVariable id: Int): ResponseEntity<ProductResponse>{
        return ResponseEntity.ok(productService.get(id).toResponse())
    }
}