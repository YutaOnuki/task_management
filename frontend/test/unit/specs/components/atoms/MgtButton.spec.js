import { mount } from '@vue/test-utils'
import MgtButton from '@/components/atoms/MgtButton.vue'

describe('MgtButton', () => {
  describe('プロパティ', () => {
    describe('type', () => {
      describe('デフォルト', () => {
        it('mgt-buttonクラスを持つbutton要素で構成されること', () => {
          const button = mount(MgtButton)
          expect(button.is('button')).toEqual(true)
          expect(button.classes()[0]).toContain('mgt-button')
        })
      })
      describe('button', () => {
        const button = mount(MgtButton, {
          propsData: { type: 'button' }
        })
        expect(button.is('button')).toEqual(true)
        expect(button.classes()[0]).toContain('mgt-button')
      })
    })
    describe('text', () => {
      it('mgt-button-textクラスを持つbutton要素で構成されること', () => {
        const button = mount(MgtButton, {
          propsData: { type: 'text' }
        })
        expect(button.is('button')).toEqual(true)
        expect(button.classes()[0]).toContain('mgt-button-text')
      })
    })
  })
  describe('disabled', () => {
    describe('デフォルト', () => {
      it('disabled属性が付与されていないこと', () => {
        const button = mount(MgtButton)
        expect(button.attributes().disabled).toBeUndefined()
      })
    })
    describe('true', () => {
      it('disabled属性が付与されていること', () => {
        const button = mount(MgtButton, {
          propsData: { disabled: true }
        })
        expect(button.attributes().disabled).toEqual('disabled')
      })
    })
    describe('false', () => {
      it('disabled属性が付与されていないこと', () => {
        const button = mount(MgtButton)
        expect(button.attributes().disabled).toBeUndefined()
      })
    })
  })
})

describe('イベント', () => {
  describe('click', () => {
    it('発行されていること', () => {
      const button = mount(MgtButton)
      button.trigger('click')
      expect(button.emitted().click.length).toEqual(1)
    })
  })
})

describe('スロット', () => {
  describe('コンテンツ挿入あり', () => {
    it('挿入されていること', () => {
      const button = mount(MgtButton, {
        slots: { default: '<p>hello</p>' }
      })
      expect(button.text()).toEqual('hello')
    })
  })
  describe('コンテンツ挿入なし', () => {
    it('挿入されていないこと', () => {
      const button = mount(MgtButton)
      expect(button.text()).toEqual('')
    })
  })
})
