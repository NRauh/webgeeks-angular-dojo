GameBag API
===========

This is the API for the Angular dojo.

If you're running the Angular project close to the time of the Dojo (8/12/19), then you don't need to run this (unless you want to).

## Dependencies

* Ruby
* Postgres

## Getting started

1. Run `bundle install` to install dependencies.
1. Run `rails db:setup` to setup the local database

## Running

If you do not already have Postgres running, use `foreman start -f Procfile.dev`.

If you do have Postgres running you can just use `rails s`.
