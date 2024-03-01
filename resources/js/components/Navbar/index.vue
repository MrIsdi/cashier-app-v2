<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <router-link class="nav-link d-flex align-items-center gap-2 fw-bold" to="/" style="color: #00ADB5">
                <i class="bi bi-shop fs-2"></i>
                <span>Shoppp</span>
            </router-link>
            <button
                class="navbar-toggler text-white bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <div class="d-flex gap-3 fw-bold" style="color: #00ADB5">
                    <router-link class="nav-link" to="/">Product</router-link>
                    <router-link class="nav-link" to="/cart">Cart</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
