import Debt from '../assets/debt.svg'
import Family from '../assets/family.svg'
import Fund from '../assets/fund.svg'
import Holiday from '../assets/holiday.svg'
import Home from '../assets/home.svg'
import Retirement from '../assets/retirement.svg'
import Vision from '../assets/vision.svg'

const images: Record<string, string> = {
  debt: Debt,
  family: Family,
  fund: Fund,
  holiday: Holiday,
  home: Home,
  retirement: Retirement,
  vision: Vision,
}

const getImageByTitle = (title: string) => (images[title] ? images[title] : Home)

export { Debt, Family, Fund, Holiday, Home, Retirement, Vision, getImageByTitle }
