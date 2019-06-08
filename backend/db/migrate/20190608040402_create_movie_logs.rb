class CreateMovieLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :movie_logs do |t|
      t.string :title
      t.string :poster_url
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
