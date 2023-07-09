# How to add a community
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
![image](https://github.com/shakiroye/tgTech-communities/assets/92779053/468f22b7-e45c-4518-a3cf-44446e4a358a)
> The type of the datas is in `types.ts`
* _name_ is mandatory.
* _links_ must have at least one element.

6. Commit changes and push the new branch.

7. Open and submit a PR.
