package br.com.twobrothers.poeselling.service

import br.com.twobrothers.poeselling.domain.User
import br.com.twobrothers.poeselling.repository.UserRepository
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
                     throw RuntimeException("password incorrect")
                 }
             } else {
                 throw RuntimeException("user not found")
             }
        }
    }
}
