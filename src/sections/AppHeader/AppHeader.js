import React from 'react'
import {
  Col,
  Row
} from 'antd'
import { ThemeConsumer } from '../../context/themeContext'

export default function AppHeader() {
  return (
    <ThemeConsumer>
    {({ theme, toggleTheme }) => (
      <Row>
        <Col flex="auto">
        <section className={`hero ${theme}-bg`}>
          <div className="hero-body">
            <div className="container">
              <h1 className={`title ${theme}-text`}>
                <span className={`${theme}-text`}>Tiny world</span>
              </h1>
              <h2 className={`subtitle ${theme}-text`}>
                <span className={`${theme}-text`}>Create your own Islands</span>
              </h2>
              <div className={'theme-button '}>
                <button
                  style={{fontSize: 30}}
                  className='btn-clear'
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? '🔦' : '💡'}
                </button>
              </div>
            </div>
          </div>
        </section>
        </Col>
      </Row>
    )}
  </ThemeConsumer>
  )
}