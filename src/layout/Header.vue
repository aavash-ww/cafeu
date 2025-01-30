<template>
    <header class="header">
        <div class="header-wrapper container">
            <div class="logo">
                <img src="../assets/images/cafeulogo.png" alt="">
            </div>
            <div class="nav-wrapper">
                <div class="navbar">
                    <ul class="navbar-lists">
                        <li class="navlinks">
                            <router-link>
                                Home
                            </router-link>
                        </li>
                        <li class="navlinks">
                            <router-link>
                                About Us
                            </router-link>
                            <img src="/src/assets/icons/dropdown-icon.svg" alt="dropdown" class="dropdown-icon">
                        </li>
                        <li class="navlinks">
                            <router-link>
                                Menu
                            </router-link>
                            <img src="/src/assets/icons/dropdown-icon.svg" alt="dropdown" class="dropdown-icon">
                        </li>
                        <li class="navlinks">
                            <router-link>
                                Blog
                            </router-link>
                            <img src="/src/assets/icons/dropdown-icon.svg" alt="dropdown" class="dropdown-icon">
                        </li>
                        <li class="navlinks">
                            <router-link>
                                Pages
                            </router-link>
                            <img src="/src/assets/icons/dropdown-icon.svg" alt="dropdown" class="dropdown-icon">
                        </li>
                        <li class="navlinks">
                            <router-link>
                                Contacts
                            </router-link>
                            <img src="/src/assets/icons/dropdown-icon.svg" alt="dropdown" class="dropdown-icon">
                        </li>
                       
                    </ul>
                </div>
                <div class="search-icon">
                    <img src="../assets/icons/search-icon.svg" alt="search" class="search-image">
                </div>
                <div class="header__contact-icon">
                    <img src="../assets/icons/contact-icon.png" alt="contact-icon">
                </div>
                <div class="header__contactnum">
                    (+977) 9863788334
                </div>
            </div>
        </div>
    </header>
</template>