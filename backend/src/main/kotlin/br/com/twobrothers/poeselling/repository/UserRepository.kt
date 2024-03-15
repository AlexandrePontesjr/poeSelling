package br.com.twobrothers.poeselling.repository

import br.com.twobrothers.poeselling.domain.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : JpaRepository<User, String> {
}
