# Togo Tech Communities
The Togo Tech Communities is a dynamic and inclusive project aimed at showcasing the vibrant and emerging tech communities in Togo. It seeks to provide a platform that celebrates the diverse range of talents, innovations, and collaborative efforts within the country's technology sector.

## How to add a community
Our goal is to make the act of contributing an enjoyable and exciting method of learning how to participate in open-source projects. To include a community, follow these steps: 
1. Fork the repository

2. Clone the project to your local machine.

3. Run the project but before make sure to install the dependencies:
```bash
# npm
npm install
npm run dev
```

4. Create a new branch (i.e. `add/the-community-name`).

5. Edit the file `public/data/communities.ts`.
Within this file, you'll find an array consisting of objects that represent portfolios. Your task is to append an object to this table, ensuring it follows the chronological order.

![image](https://github.com/shakiroye/tgTech-communities/assets/92779053/ec609e3d-1a3a-425f-ae7c-ebec771743ca)


> The type of the datas is in `types.ts`
* _name_ is mandatory.
* _links_ must have at least one element.

6. Commit changes and push the new branch.

7. Open and submit a PR.

## Credit
Got inspired from the great work of [Gausoft](https://github.com/gausoft/awesome-TgTech-communities)
