import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import { router } from "expo-router";

const favoriteBooks = [
  {
    id: "gatsby-1925",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "April 10, 1925",
    publisher: "Charles Scribner's Sons",
    language: "English",
    isbn10: "0743273567",
    isbn13: "9780743273565",
    pages: 180,
    coverUri: "https://example.com/covers/gatsby.jpg", // placeholder URL
    summary: `Nick Carraway, a young man from Minnesota, moves to Long Island's West Egg in 1922… Jay Gatsby's lavish lifestyle masks his obsession with reuniting with Daisy Buchanan.`,
  },
  {
    id: "1984-1949",
    title: "1984",
    author: "George Orwell",
    publishedDate: "June 8, 1949",
    publisher: "Secker & Warburg",
    language: "English",
    isbn10: "0451524934",
    isbn13: "9780451524935",
    pages: 328,
    coverUri: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
    summary: `Winston Smith lives in a dystopian society under the constant surveillance of Big Brother. As he begins to question the Party's authority, he risks everything for truth and freedom.`,
  },
  {
    id: "mockingbird-1960",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedDate: "July 11, 1960",
    publisher: "J.B. Lippincott & Co.",
    language: "English",
    isbn10: "0061120081",
    isbn13: "9780061120084",
    pages: 281,
    coverUri: "https://covers.openlibrary.org/b/id/8228691-M.jpg",
    summary: `Set in the American South during the 1930s, the novel follows young Scout Finch as her father, Atticus, defends a Black man falsely accused of rape.`,
  },
  {
    id: "pride-1813",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedDate: "January 28, 1813",
    publisher: "T. Egerton, Whitehall",
    language: "English",
    isbn10: "1503290565",
    isbn13: "9781503290563",
    pages: 279,
    coverUri: "https://covers.openlibrary.org/b/id/8486196-M.jpg",
    summary: `Elizabeth Bennet navigates societal expectations and personal pride in 19th-century England while dealing with love, family, and social status—especially concerning Mr. Darcy.`,
  },
];

const navigateToMore = useCallback((item) => {
  router.push({
    pathname: "screens/More",
    params: { param: JSON.stringify(item) },
  });
});

const FavoriteBook = ({ book }) => {
  const { coverUri, title, author } = book;

  return (
    <TouchableOpacity onPress={() => navigateToMore(book)}>
      <View
        style={{
          width: 150,
          margin: 8,
          borderRadius: 12,
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Image
          source={{ uri: coverUri }}
          style={{ width: "100%", height: 180 }}
        />
        <View style={{ padding: 12 }}>
          <Text>{title}</Text>
          <Text>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FavoriteBooksList = ({ data }) => (
  <View>
    <Text
      style={{
        marginHorizontal: 16,
        fontSize: 23,
        fontWeight: "800",
        marginTop: 24,
        marginBottom: 8,
      }}
    >
      Favorite Book
    </Text>
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FavoriteBook book={item} />}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

export default function Mypage() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={
          <>
            <FavoriteBooksList data={favoriteBooks} />
            <FavoriteBooksList data={favoriteBooks} />
            <FavoriteBooksList data={favoriteBooks} />
            <FavoriteBooksList data={favoriteBooks} />
          </>
        }
      />
    </SafeAreaView>
  );
}
