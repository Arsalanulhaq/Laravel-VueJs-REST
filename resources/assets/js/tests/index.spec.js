import { mount, shallowMount } from '@vue/test-utils'
import CreateUser from '../../../js/components/CreateUser.vue'

test('should check list of users', () => {
    const wrapper = mount(CreateUser)

    // assert the error is rendered
    expect(wrapper.find('.btn-primary').exists()).toBe(true)
})
