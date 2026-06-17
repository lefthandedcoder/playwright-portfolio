import { test, expect } from '@playwright/test'

const BASE = 'https://jsonplaceholder.typicode.com';

test.describe('REST API - Posts', () => {
    test('GET /posts returns 100 posts', async ({ request }) => {
        const res = await request.get(`${BASE}/posts`);
        expect(res.status()).toBe(200);
        const posts = await res.json();
        expect(posts).toHaveLength(100);
    });

    test('POST /posts creates a resource', async ( { request }) => {
        const res = await request.post(`${BASE}/posts`, {
            data: { title: 'Test', body: 'Body', userId: 1 },
            headers: { 'Content-Type': 'application/json' },
        });
        expect(res.status()).toBe(201);
        const created = await res.json();
        expect(created).toMatchObject({ title: 'Test', id: expect.any(Number) });
    });

    test('GET /posts/99999 returns 404', async ({ request }) => {
        const res = await request.get(`${BASE}/posts/99999`);
        expect(res.status()).toBe(404);       
    });
})