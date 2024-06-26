package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.Product.Type.ALL
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.repository.ProductRepository
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class ProductService(
    val productRepository: ProductRepository
) {

    fun gelAll (pageable: Pageable, type: Product.Type, tenant: Tenant) : Page<Product>{
        return when(type){
            ALL -> productRepository.findAllByTenant(pageable, tenant)
            else -> productRepository.findAllByTypeAndTenant(pageable, type, tenant)
        }
    }

    fun get (id: Int) : Product{
        return try {
            productRepository.findById(id).get()
        } catch (ex: Exception) {
            throw RuntimeException("Product not found")
        }
    }

    fun save (product: Product) : Product{
        return productRepository.save(product)
    }

    fun delete (id: Int, gameId: Int, username: String) {
        productRepository.delete(
            Product(
                id = id,
                createdBy = User(
                    username = username
                ),
                tenant = Tenant(
                    id = gameId
                )
            )
        )
    }
}
