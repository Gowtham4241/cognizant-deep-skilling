package com.cognizant.authenticationservice.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.util.Date;

public class JwtUtil {

    private static final SecretKey KEY =
            Keys.hmacShaKeyFor("ThisIsASecretKeyForJwtGeneration123456".getBytes());

    public static String generateToken(String username) {

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1200000))
                .signWith(KEY)
                .compact();
    }
}