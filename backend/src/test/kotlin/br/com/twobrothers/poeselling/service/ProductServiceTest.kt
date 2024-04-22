package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.Product.Type.*
import br.com.twobrothers.poeselling.repository.ProductRepository
import br.com.twobrothers.poeselling.utils.randomProduct
import br.com.twobrothers.poeselling.utils.randomString
import br.com.twobrothers.poeselling.utils.randomTenant
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.kotlin.*
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.Pageable
import java.util.*

class ProductServiceTest {

    private val productRepository: ProductRepository = mock()
    private val productService = ProductService(productRepository)

    @Test
    fun `should get all Products when exists from a specific type and Tenant`() {
        val pageable: Pageable = mock()
        val product = randomProduct()
        val page = PageImpl(listOf(product))
        whenever(productRepository.findAllByTypeAndTenant(any(), any(), any())).thenReturn(page)

        val result = productService.gelAll(pageable, product.type, product.tenant)

        assertEquals(1, result.content.size.toLong())
        assertEquals(product.id, result.content[0].id)
        assertEquals(product.type, result.content[0].type)
        assertEquals(product.tenant, result.content[0].tenant)
        assertEquals(product.image, result.content[0].image)
        assertEquals(product.status, result.content[0].status)
        verify(productRepository, times(1)).findAllByTypeAndTenant(any(), any(), any())
    }

    @Test
    fun `should get all Products`() {
        val pageable: Pageable = mock()
        val page = PageImpl(listOf(
            randomProduct().copy(type = SERVICE),
            randomProduct().copy(type = ITEM)
        ))

        whenever(productRepository.findAllByTenant(eq(pageable), any())).thenReturn(page)

        val result = productService.gelAll(pageable, ALL, randomTenant())

        assertEquals(2, result.content.size.toLong())
        assertEquals(SERVICE, result.content[0].type)
        assertEquals(ITEM, result.content[1].type)
        verify(productRepository, times(1)).findAllByTenant(eq(pageable), any())
    }

    @Test
    fun get() {
        val product = randomProduct()
        whenever(productRepository.findById(any())).thenReturn(Optional.of(product))

        val result = productService.get(product.id)

        assertEquals(product.id, result.id)
        assertEquals(product.type, result.type)
        assertEquals(product.name, result.name)
        assertEquals(product.description, result.description)
        assertEquals(product.price, result.price)
        assertEquals(product.createdBy, result.createdBy)
        assertEquals(product.isPromotion, result.isPromotion)
        assertEquals(product.promotionExpiration, result.promotionExpiration)
        verify(productRepository, times(1)).findById(any())
    }

    @Test
    fun `should failed when Product not exists`() {
        val product = randomProduct()
        whenever(productRepository.findById(any())).thenReturn(Optional.empty())

        assertThrows<RuntimeException> { productService.get(product.id) }
        verify(productRepository, times(1)).findById(product.id)
    }

    @Test
    fun save() {
        val product = randomProduct()
        whenever(productRepository.save(eq(product))).thenReturn(product)

        val result = productService.save(product)

        assertEquals(product.id, result.id)
        assertEquals(product.type, result.type)
        assertEquals(product.name, result.name)
        assertEquals(product.description, result.description)
        assertEquals(product.price, result.price)
        assertEquals(product.createdBy, result.createdBy)
        assertEquals(product.isPromotion, result.isPromotion)
        assertEquals(product.promotionExpiration, result.promotionExpiration)
        verify(productRepository, times(1)).save(any())
    }

    @Test
    fun delete() {
        doNothing().whenever(productRepository).delete(any())

        productService.delete(randomProduct().id, randomTenant().id, randomString())

        verify(productRepository, times(1)).delete(any())
    }
}
