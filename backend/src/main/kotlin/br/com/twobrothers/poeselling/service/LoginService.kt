package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.exception.BusinessException
import br.com.twobrothers.poeselling.repository.UserRepository
import org.springframework.http.HttpStatus
import org.springframework.http.HttpStatus.BAD_REQUEST
import org.springframework.stereotype.Service

@Service
class LoginService(
    val userRepository: UserRepository
) {
    fun login (user: User) : User {
         userRepository.findById(user.username).apply {
             if (this.isPresent) {
                 val recoveredUser = this.get()
                 if (user.password == recoveredUser.password) {
                     return user
                 } else {
                     throw BusinessException(BAD_REQUEST,"password incorrect")
                 }
             } else {
                 throw BusinessException(BAD_REQUEST, "user not found")
             }
        }
    }
}
