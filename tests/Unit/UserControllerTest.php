<?php

use Tests\TestCase;

class UserControllerTest extends TestCase
{
    /**
     * @return void
     */
    public function test_create_user()
    {
        $response = $this->json(
            'POST', '/api/users/create', [
                    'first_name'  => 'Test User',
                    'last_name'  => 'User'
                ]
        );
        $response->assertStatus(200);
    }
}
