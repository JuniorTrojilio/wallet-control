import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard"; 
import { NewTransactionModal } from "./components/NewTransactionModal"; 
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenAndCloseNewTransacionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen)
  }

  return (
    <TransactionsProvider>
      <Header onOpenAndCloseNewTransactionModal={handleOpenAndCloseNewTransacionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleOpenAndCloseNewTransacionModal}
      />
      <GlobalStyle />
    </ TransactionsProvider>
  );
}
