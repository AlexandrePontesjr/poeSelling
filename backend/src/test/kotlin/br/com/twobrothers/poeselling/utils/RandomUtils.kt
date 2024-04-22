package br.com.twobrothers.poeselling.utils

import br.com.twobrothers.poeselling.domain.Product
import br.com.twobrothers.poeselling.domain.QuestionAndAnswer
import br.com.twobrothers.poeselling.domain.Tenant
import br.com.twobrothers.poeselling.domain.User
import java.math.BigDecimal
import java.util.*

fun randomString(): String {
    return UUID.randomUUID().toString()
}

fun randomBigDecimal(): BigDecimal {
    return BigDecimal(randomInt())
}

fun randomDate(): Date {
    return Date()
}

fun randomBoolean(): Boolean {
    return Random().nextBoolean()
}

fun randomInt(): Int {
    return Random().nextInt()
}

fun randomUserObject(): User {
    return User(
        username = randomString(),
        password = randomString(),
    )
}

fun randomTenant(): Tenant {
    return Tenant(
        id = randomInt(),
        name = randomString(),
    )
}

fun randomQuestionAndAnswer(): QuestionAndAnswer {
    return QuestionAndAnswer(
        id = randomInt(),
        question = randomString(),
        answer = randomString(),
    )
}

fun randomProduct(): Product {
    return Product(
        id = randomInt(),
        name = randomString(),
        description = randomString(),
        type = Product.Type.ITEM,
        price = randomBigDecimal(),
        createdBy = randomUserObject(),
        isPromotion = randomBoolean(),
        promotionExpiration = randomDate()
    )
}
