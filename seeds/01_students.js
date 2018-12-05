exports.seed = (knex, Promise) => {

  return knex('students').del()
    .then(() => {

      return knex('students').insert([{
        name: 'Dane Parke',
        fave_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
        previous_occupation: 'Sous Chef',
        hometown_lat: 38.1499,
        hometown_long: 144.3617,
        useless_superpower: 'Ability to resist the urges of the snack tray, during presentations'
      }, {
        name: 'Sir. Phiillip Hengemuhle the First',
        fave_animal: 'http://infoweasels.com/whatcat.jpg',
        previous_occupation: 'Dancer',
        hometown_lat: 40.0150,
        hometown_long: 105.2705,
        useless_superpower: 'Sub-par speling'
      }, {
        name: 'Josh Scala',
        fave_animal: 'https://secure.img1-fg.wfcdn.com/im/38103834/resize-h600%5Ecompr-r85/2804/28041725/%2527Proportions+of+the+Human+Figure+%2528Vitruvian+Man%2529%2527+by+Leonardo+Da+Vinci+Graphic+Art+on+Wrapped+Canvas.jpg',
        previous_occupation: 'Applications Engineer',
        hometown_lat: 40.959471,
        hometown_long: 74.125202,
        useless_superpower: 'Can telekinetically move rubbage, but only between two trash recepticles.'
      }, {
        name: 'Reid Garner',
        fave_animal: 'https://takeshape-prod.imgix.net/207c4ff8-bdf4-4529-970e-b992d4539152/dev/2ea87773-8dde-4724-a03c-bab1190a7a04/John%20Marais-%20Murembo.jpg?auto=compress%2Cformat',
        previous_occupation: 'Bartender',
        hometown_lat: 33.209,
        hometown_long: 87.569,
        useless_superpower: 'Being able to always tell the color of the next gumball to pop out of the machine'
      }, {
        name: 'Sonja',
        fave_animal: 'https://i0.wp.com/www.wagpets.com/wp-content/uploads/2017/11/the-pug-rose-ears.jpeg?w=960&ssl=1',
        previous_occupation: 'Marketing Manager',
        hometown_lat: 36.407249,
        hometown_long: -105.573067,
        useless_superpower: 'can understand the inner workings of butter'
      }, {
        name: 'Trey',
        fave_animal: 'https://images-na.ssl-images-amazon.com/images/I/61irQrNjgnL._SY679_.jpg (33 kB)',
        previous_occupation: 'General Manager',
        hometown_lat: 37.2638,
        hometown_long: 122.0230,
        useless_superpower: 'super deaf'
      }
    ])
    })
};