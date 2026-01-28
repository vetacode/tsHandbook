//JSX namespace di TypeScript

//TypeScript nge-type JSX lewat namespace JSX. Letaknya tergantung jsx compiler option yang dipakai.

//1. Classic runtime
//(jsx: preserve | react | react-native)
// JSX diubah jadi createElement(...)
// Type diambil dari factory (misalnya React.createElement)
// Maka JSX harus ada di:
//  - React.JSX → React
//  - h.JSX → Preact

//Contoh:
// React → import * as React from 'react'
// Preact → import { h } from 'preact'

//2. Automatic runtime
//(jsx: react-jsx | react-jsxdev)
// Tidak perlu import React
// JSX harus diexport dari:
//  - jsx-runtime
//  - jsx-dev-runtime
// Package harus expose file ini lewat exports di package.json

// Di file jsx-runtime.d.ts:
export namespace JSX {
  // types
}

//3. Fallback
// Kalau JSX tidak ditemukan, TypeScript akan pakai global JSX namespace.

//NOTES:
// JSX namespace = tempat TypeScript cari tipe JSX
// Lokasinya tergantung mode JSX (classic vs automatic)
// React lama → React.JSX
// React baru → jsx-runtime
// Kalau nggak ketemu → pakai global
