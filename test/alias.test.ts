import { getCypherAliases } from "../dist";

test('extract aliases from a Cypher query', () => {
  expect(getCypherAliases('MATCH (u:User) WITH u AS user RETURN user, 1 + 1 as x, toString(32242334) as r')).toStrictEqual(['user', 'x', 'r']);
});
