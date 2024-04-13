package br.com.twobrothers.poeselling.mapper

import br.com.twobrothers.poeselling.domain.Tenant


fun Int.toDomain(): Tenant =
    Tenant(id = this)
