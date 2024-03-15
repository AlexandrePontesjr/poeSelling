package br.com.twobrothers.poeselling.domain

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name = "poe_selling_user")
data class User(
    @Id
    val username: String = "",
    val password: String = "",
) {
    companion object {
        const val JWT_SECRET_KEY = "3Jk@5Lp#9sG!2hT3Jk@5Lp#9sG!2hT3Jk@5Lp#9sG!2hT_poeselling"
    }
}
