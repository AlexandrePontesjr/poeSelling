package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.repository.ProductRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class ProductService(
    val productRepository: ProductRepository
) {

    fun gelAll(pageable: Pageable): Page<Product>{
        return productRepository.findAll(pageable)
    }

    fun get(id: Int): Product{
        return productRepository.findById(id).get()
    }

    fun save(product: Product): Product{
        return productRepository.save(product)
    }

    fun delete(id: Int, username: String){
        productRepository.delete(
            Product(
                id = id,
                createdBy = User(
                    username = username
                )
            )
        )
    }
}