package br.com.twobrothers.poeselling.controller.response

import org.apache.logging.log4j.util.Strings.EMPTY

data class TenantResponse(
    val id: Int = Int.MIN_VALUE,
    val name: String = EMPTY,
    val image: String = EMPTY
)
