describe('Test Property Report Funnel', () => {
    it('1.1. Property Details, Owner Occupied, Sell Now', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Now').click()
        cy.contains('Next').click()
    })

    it('1.2. Property Details, Owner Occupied, Sell Within next Month', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Within the next month').click()
        cy.contains('Next').click()
    })

    it('1.3. Property Details, Owner Occupied, Sell 2-6 months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('2-6 months').click()
        cy.contains('Next').click()
    })

    it('1.4. Property Details, Owner Occupied, Sell 6+ months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('6+ months').click()
        cy.contains('Next').click()
    })

    it('1.5. Property Details, Owner Occupied, Already on the market', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Already on the market').click()
        cy.contains('Next').click()
    })

    it('1.6. Property Details, Owner Occupied, Not sure', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Not sure').click()
        cy.contains('Next').click()
    })

    it('1.7. Property Details, Owner Occupied, Just Refinancing', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Just Refinancing').click()
        cy.contains('Next').click()
    })

    it('2.1. Property Details, Owner Investor, Sell Now', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Now').click()
        cy.contains('Next').click()
    })

    it('2.2. Property Details, Owner Investor, Sell Within next Month', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Within the next month').click()
        cy.contains('Next').click()
    })

    it('2.3. Property Details, Owner Investor, Sell 2-6 months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('2-6 months').click()
        cy.contains('Next').click()
    })

    it('2.4. Property Details, Owner Investor, Sell 6+ months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('6+ months').click()
        cy.contains('Next').click()
    })

    it('2.5. Property Details, Owner Investor, Already on the market', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Already on the market').click()
        cy.contains('Next').click()
    })

    it('2.6. Property Details, Owner Investor, Not sure', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Not sure').click()
        cy.contains('Next').click()
    })

    it('2.7. Property Details, Owner Investor, Just Refinancing', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Just Refinancing').click()
        cy.contains('Next').click()
    })

    it('3.1. Property Details, Buyer, Sell Before Purchase', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Buyer').click()
        cy.contains('Next').click()
        cy.contains('Yes').click()
        cy.contains('Next').click()
    })

    it('3.2. Property Details, Buyer, Dont Sell Before Purchase', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Buyer').click()
        cy.contains('Next').click()
        cy.contains('No').click()
        cy.contains('Next').click()
    })

    it('4. Property Details, Tenant', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.get('#property-data-bedrooms-input').type('3')
        cy.get('#property-data-bathrooms-input').type('1')
        cy.get('#property-data-car-spaces-input').type('4')
        cy.contains('Next').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Tenant').click()
        cy.contains('Next').click()
    })




    it('5.1. Skip Property Details, Owner Occupied, Sell Now', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Now').click()
        cy.contains('Next').click()
    })

    it('5.2. Skip Property Details, Owner Occupied, Sell Within next Month', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Within the next month').click()
        cy.contains('Next').click()
    })

    it('5.3. Skip Property Details, Owner Occupied, Sell 2-6 months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('2-6 months').click()
        cy.contains('Next').click()
    })

    it('5.4. Skip Property Details, Owner Occupied, Sell 6+ months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('6+ months').click()
        cy.contains('Next').click()
    })

    it('5.5. Skip Property Details, Owner Occupied, Already on the market', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Already on the market').click()
        cy.contains('Next').click()
    })

    it('5.6. Skip Property Details, Owner Occupied, Not sure', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Not sure').click()
        cy.contains('Next').click()
    })

    it('5.7. Skip Property Details, Owner Occupied, Just Refinancing', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Occupier').click()
        cy.contains('Next').click()
        cy.contains('Just Refinancing').click()
        cy.contains('Next').click()
    })

    it('6.1. Skip Property Details, Owner Investor, Sell Now', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Now').click()
        cy.contains('Next').click()
    })

    it('6.2. Skip Property Details, Owner Investor, Sell Within next Month', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Within the next month').click()
        cy.contains('Next').click()
    })

    it('6.3. Skip Property Details, Owner Investor, Sell 2-6 months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('2-6 months').click()
        cy.contains('Next').click()
    })

    it('6.4. Skip Property Details, Owner Investor, Sell 6+ months', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('6+ months').click()
        cy.contains('Next').click()
    })

    it('6.5. Skip Property Details, Owner Investor, Already on the market', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Already on the market').click()
        cy.contains('Next').click()
    })

    it('6.6. Skip Property Details, Owner Investor, Not sure', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Not sure').click()
        cy.contains('Next').click()
    })

    it('6.7. Skip Property Details, Owner Investor, Just Refinancing', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Owner Investor').click()
        cy.contains('Next').click()
        cy.contains('Just Refinancing').click()
        cy.contains('Next').click()
    })

    it('7.1. Skip Property Details, Buyer, Sell Before Purchase', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Buyer').click()
        cy.contains('Next').click()
        cy.contains('Yes').click()
        cy.contains('Next').click()
    })

    it('7.2. Skip Property Details, Buyer, Dont Sell Before Purchase', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Buyer').click()
        cy.contains('Next').click()
        cy.contains('No').click()
        cy.contains('Next').click()
    })

    it('8. Skip Property Details, Tenant', () => {
        cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')
        cy.get('#hero-address-finder-autocomplete-input').type('25 Seabrook Crescent')
        cy.contains('25 Seabrook Crescent, DOONSIDE NSW 2767').click()
        cy.contains('Next').click()

        cy.contains('Skip').click()

        cy.get('#sign-up-first-name-input').type('Dylan')
        cy.get('#sign-up-last-name-input').type('Wang')
        cy.get('#sign-up-email-input').type('dylanwang889@gmail.com')
        cy.get('#phone-number-input').type('0449700205')
        cy.contains('Next').click()

        cy.contains('Tenant').click()
        cy.contains('Next').click()
    })
})