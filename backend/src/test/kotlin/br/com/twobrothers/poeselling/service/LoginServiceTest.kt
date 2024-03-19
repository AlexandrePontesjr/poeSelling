package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.repository.UserRepository
import br.com.twobrothers.poeselling.utils.randomUserObject
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.ArgumentMatchers.any
import org.mockito.Mockito.*
import org.mockito.kotlin.whenever
import java.util.*

class LoginServiceTest {

    private val userRepository: UserRepository = mock()
    private val loginService = LoginService(userRepository)

    @Test
    fun `should login when user exists and password is correct`() {
        // arrange
        val user: User = randomUserObject()
        `when`(userRepository.findById(any())).thenReturn(Optional.of(user))

        // act
        val result = loginService.login(user)

        // assert
        assertEquals(user.username, result.username)
        assertEquals(user.password, result.password)
        verify(userRepository, times(1)).findById(any())
    }

    @Test
    fun `should not login when user exists and password is incorrect`() {
        val user: User = randomUserObject()
        whenever(userRepository.findById(any())).thenReturn(Optional.of(randomUserObject()))

        // act & assert
        assertThrows<RuntimeException> { loginService.login(user) }
        verify(userRepository, times(1)).findById(any())
    }

    @Test
    fun `should not login when user not exists`() {
        val user: User = randomUserObject()
        whenever(userRepository.findById(any())).thenReturn(Optional.empty())

        // act & assert
        assertThrows<RuntimeException> { loginService.login(user) }
        verify(userRepository, times(1)).findById(any())
    }
}