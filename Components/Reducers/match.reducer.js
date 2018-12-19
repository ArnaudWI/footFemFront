export default function (fixture = 0 , action) {
  if (action.type === 'setFixtureId') {
      fixture.id = action.fixtureId;
      return fixture
    } else {
    return fixture;
  }
};
