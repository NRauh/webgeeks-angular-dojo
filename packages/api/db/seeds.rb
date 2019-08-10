def create_game
  game = Game.create!(
    name: Faker::Lorem.sentence,
    active: Faker::Boolean.boolean
  )

  4.times { create_note(game) }
end

def create_note(game)
  game.notes.create!(
    name: Faker::Lorem.sentence,
    body: Faker::Lorem.paragraphs(number: 7, supplemental: true).join("\n")
  )
end

4.times { create_game }
