package br.com.twobrothers.poeselling.domain

import jakarta.persistence.*
import jakarta.persistence.GenerationType.IDENTITY

@Entity
@Table(name = "poe_selling_questions_and_answers")
data class QuestionAndAnswer(
    @Id
    @GeneratedValue(strategy = IDENTITY)
    val id: Int,
    val question: String = "",
    val answer: String = "",
    val status: String = "",
    @ManyToOne
    val createdBy: User = User(),
    @ManyToOne
    val tenant: Tenant = Tenant(),
) {
}
