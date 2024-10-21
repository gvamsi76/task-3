# Rick and Morty Episode & Character Explorer

This is a responsive web application built with **Next.js**, **TypeScript**, and **Material UI**, which allows users to explore episodes and characters from the **Rick and Morty API**. Users can select episodes from the sidebar, view characters from selected episodes, and paginate through characters.

## Features

- **Sidebar Navigation**: List of episodes from the Rick and Morty API.
- **Episode-Specific Characters**: When an episode is selected, the characters in that episode are displayed.
- **Character Pagination**: If no episode is selected, the default character list is paginated.
- **Responsive UI**: Fully responsive layout using Material UI grid system and pagination.
- **Efficient Data Fetching**: Optimized API calls with caching, memoization, and request aborting to handle rapid interactions.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: For static type checking and improved code quality.
- **Material UI**: For a responsive and consistent UI design.
- **Axios**: To handle API requests.
- **Rick and Morty API**: The API providing episode and character data.

## Setup and Installation

### 1. Clone the Repository

```bash
# git clone https://github.com//rick-morty-explorer.git
# cd rick-morty-explorers
```

### 2. Install Dependencies

Make sure you have `node.js` and `npm` or `yarn` installed. Then run the following command:

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

After the installation is complete, you can start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 4. Build for Production

To build the project for production, use:

```bash
npm run build
# or
yarn build
```

This will generate the optimized static files in the `.next` folder.

### 5. Start the Production Server

After building the app, you can start the production server with:

```bash
npm run start
# or
yarn start
```

## API Endpoints Used

- `/api/episode`:
  - Fetches the list of episodes.
  
- `/api/character/?page=X`:
  - Fetches the characters paginated by the given page number.
  
- `/api/episode/{id}`:
  - Fetches the specific episode details including the characters that appear in it.

## Optimizations

- **Memoization**: We use `useCallback` and `useMemo` to prevent unnecessary API calls and computations during renders.
- **AbortController**: Cancels previous API requests when users rapidly change episodes to avoid waiting for outdated responses.
- **Caching**: Episode data and characters are cached locally, reducing repeated API calls when the user revisits an episode.

## Future Improvements

- **Search functionality**: Add a search bar to filter episodes and characters.
- **Character Details**: Display more detailed character info when a card is clicked.
- **Improved Pagination**: Allow page size customization and jump to specific page.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repo.
2. Create your feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.
